"use client";

import { Container } from '@/components/ui/Container';

const brands = [
    "HomeKit", "Matter", "Zigbee", "Z-Wave", "Homebridge",
    "Home Assistant", "OpenHAB", "ESPHome", "Tasmota", "WLED",
    "MQTT", "Node-RED", "Lutron", "Crestron", "Savant",
    "Control4", "KNX", "DALI", "Modbus", "Sonos",
    "Unifi", "Philips Hue", "Shelly", "Aqara", "Tuya",
    "SmartThings", "Google Home", "Alexa", "Schlage",
    "Yale", "August", "Kwikset", "Ecobee", "Nest",
    "Reolink", "Amcrest", "Hikvision", "Dahua",
    "Somfy", "Velux", "Hunter Douglas"
];

export const BrandGrid = () => {
    return (
        <section className="py-24 bg-brand-black border-y border-white/5 overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-brand-black z-10 pointer-events-none"></div>

            <Container>
                <div className="flex flex-col items-center mb-12">
                    <p className="text-white/40 text-xs font-bold tracking-[0.2em] uppercase mb-4">Trusted Integration</p>
                </div>
            </Container>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-marquee whitespace-nowrap group-hover:[animation-play-state:paused]">
                    {/* First copy */}
                    {brands.map((brand, i) => (
                        <div key={`a-${i}`} className="mx-8 md:mx-16 flex items-center justify-center">
                            <span className="text-4xl md:text-6xl font-black uppercase text-white/10 tracking-tighter hover:text-brand-accent hover:opacity-100 transition-all duration-300 cursor-default select-none">
                                {brand}
                            </span>
                        </div>
                    ))}
                    {/* Second copy for seamless loop */}
                    {brands.map((brand, i) => (
                        <div key={`b-${i}`} className="mx-8 md:mx-16 flex items-center justify-center">
                            <span className="text-4xl md:text-6xl font-black uppercase text-white/10 tracking-tighter hover:text-brand-accent hover:opacity-100 transition-all duration-300 cursor-default select-none">
                                {brand}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="absolute top-0 flex animate-marquee2 whitespace-nowrap group-hover:[animation-play-state:paused]">
                    {/* Duplicate required for true infinite scroll if using the absolute position technique, 
                         but with the flex 'marquee' animation, we usually just need the two sets inline.
                         Let's stick to the simple flex version above and define the keyframes in globals.css 
                     */}
                </div>
            </div>
        </section>
    );
};

