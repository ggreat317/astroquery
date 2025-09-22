"use client"

import React, { useRef, useEffect, useState } from "react";
import '../css/query.css'

import astronauts from '../data/astronauts.json'

type PointData = {
  lat: string;
  lng: string;
  size: number;
  color: string;
  name: string;
}

type DotData = {
  lat: string;
  lng: string;
  size: number;
  color: string;
  name: string;
  baseAltitude: number;        
  amplitude: number;          
  speed: number;
  phase: number;
}

export function Main({selection, search, newSelection} : {selection: string, search: string, newSelection : React.Dispatch<React.SetStateAction<string>>}) {

  const person = astronauts.filter(n => n.Name == selection)[0]

  const [shipPoint, setShipPoint] = useState<DotData>({
      lat: person.Latitude,
      lng: person.Longitude,
      color: "red",
      size: 0.5,
      baseAltitude: 0.3,   
      amplitude: 0.2,
      phase: 0,            
      speed: 0.02,
      name: person.Name

    })
  
  const globeRef = useRef<HTMLDivElement | null>(null);

  const filteredAstronauts = astronauts.filter(a =>
    (a.Name.toLowerCase().includes(search.toLowerCase()) ||
    a.Country.toLowerCase().includes(search.toLowerCase())) &&
    (a.Longitude && a.Latitude)
  );

  useEffect(() => {
    import("globe.gl").then(({ default: Globe }) => {
    if (!globeRef.current) return;

    const dataPoints : PointData[] = filteredAstronauts
    .map(a => {
      const [days, hours, minutes] = a["Total Flight Time (ddd:hh:mm)"].split(':').map(Number);
      const totalMinutes = days * .24 * + hours * .01;
      return{
         lat: a.Latitude,
         lng: a.Longitude,
         size: a.Name === selection ? 1.0 : 0.5,      // bigger for selected
         color: a.Name === selection ? "#00ff00" : "blue", // bright green
         name: a.Name
      }
    })

    const globe = new Globe(globeRef.current)
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
      .backgroundImageUrl('https://unpkg.com/three-globe/example/img/night-sky.png') 
      .pointsData(dataPoints)
      
      .onPointClick((point,event,coords) => {
        const pointer = point as PointData;
        newSelection(pointer.name)
      })
      .pointAltitude("size")
      .pointColor("color");


    const controls = globe.controls(); 
    controls.autoRotate = true;
    controls.autoRotateSpeed = 6; 
    controls.enableZoom = true;      
    controls.enablePan = true; 

    const container = globeRef.current.querySelector("canvas");
    if (!container) return

    container.addEventListener("mouseenter", ()=>{
      controls.autoRotateSpeed = .01;
    })

    container.addEventListener("mouseleave", ()=>{
      controls.autoRotateSpeed = 6;
    })


    const resizeObserver = new ResizeObserver(() => {
      globe.width(globeRef.current!.offsetWidth);
      globe.height(globeRef.current!.offsetHeight);
    });
    resizeObserver.observe(globeRef.current);

    return () => resizeObserver.disconnect();

    });
  }, [filteredAstronauts, astronauts]);;

  return (
  <div  className="globe">
    <div ref={globeRef}/>
  </div>);
}

