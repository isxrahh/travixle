"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import HeroCarousel from "@/components/HeroCarousel";
import { navItems } from "../constants/index.js";
import {
  Plane,
  Hotel,
  Calendar,
  ArrowLeftRight,
  MapPin,
  Users,
} from "lucide-react";

export default function Home() {
  const [flightFrom, setFlightFrom] = useState("");
  const [flightTo, setFlightTo] = useState("");

  const swapLocations = () => {
    setFlightFrom((prev) => flightTo);
    setFlightTo((prev) => flightFrom);
  };

  return (
    <>
      <HeroCarousel />

      <nav className="py-6 px-4 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-r from-indigo-50/80 to-purple-50/80 backdrop-blur-sm border-0 shadow-xl rounded-3xl p-8">
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-10 xl:grid-cols-14 gap-8 justify-items-center">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:bg-white/70 hover:shadow-lg hover:-translate-y-2"
                  >
                    <div className="relative">
                      <Icon className="w-8 h-8 text-gray-600 group-hover:text-indigo-600 transition-colors" />
                      {item.badge && (
                        <span className="absolute -top-7 -right-1 text-xs bg-gradient-to-r from-fuchsia-500 to-cyan-500 text-white px-2 py-1 rounded-full font-bold shadow">
                          new
                        </span>
                      )}
                    </div>
                    <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-indigo-600 text-center">
                      {item.label}
                    </span>
                  </a>
                );
              })}
            </div>
          </Card>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto -mt-16 relative z-20 px-4">
        <Card className="backdrop-blur-xl bg-white/95 border-0 shadow-2xl rounded-3xl overflow-hidden">
          <div className="p-8">
            <Tabs defaultValue="flights" className="w-full">
              <TabsList className="grid h-auto w-full grid-cols-3 mb-10 bg-gray-100 p-2 rounded-xl">
                <TabsTrigger
                  value="flights"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg py-3 font-semibold flex items-center gap-2"
                >
                  <Plane className="w-5 h-5" />
                  Flights
                </TabsTrigger>
                <TabsTrigger
                  value="hotels"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg py-3 font-semibold flex items-center gap-2"
                >
                  <Hotel className="w-5 h-5" />
                  Hotels
                </TabsTrigger>
                <TabsTrigger
                  value="holidays"
                  className="data-[state=active]:bg-white data-[state=active]:shadow-sm rounded-lg py-3 font-semibold flex items-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Holidays
                </TabsTrigger>
              </TabsList>

              <TabsContent value="flights" className="space-y-8">
                <div className="space-y-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative">
                    <div className="space-y-2">
                      <Label className="text-gray-600 font-medium">From</Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
                        <Input
                          placeholder="City or Airport (e.g., Delhi, DEL)"
                          value={flightFrom}
                          onChange={(e) => setFlightFrom(e.target.value)}
                          className="pl-12 h-14 text-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-gray-600 font-medium">To</Label>
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 w-5 h-5 text-gray-400 pointer-events-none" />
                        <Input
                          placeholder="City or Airport (e.g., Mumbai, BOM)"
                          value={flightTo}
                          onChange={(e) => setFlightTo(e.target.value)}
                          className="pl-12 h-14 text-lg border-gray-200 focus:border-indigo-500 focus:ring-indigo-500"
                        />
                      </div>
                    </div>
                    <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                      <Button
                        onClick={swapLocations}
                        size="icon"
                        className="pointer-events-auto w-16 h-16 rounded-full bg-white shadow-2xl border-8 border-white hover:scale-110 hover:shadow-3xl transition-all duration-300"
                      >
                        <ArrowLeftRight className="w-8 h-8 text-indigo-600" />
                      </Button>
                    </div>
                  </div>

                  <div className="lg:hidden my-10 flex justify-center">
                    <Button
                      onClick={swapLocations}
                      size="lg"
                      className="px-16 py-6 text-xl font-bold bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 hover:from-indigo-200 hover:to-purple-200 shadow-2xl rounded-full flex items-center gap-5 transform hover:scale-110 transition-all duration-300"
                    >
                      <ArrowLeftRight className="w-8 h-8" />
                      Swap From & To
                    </Button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                    <div className="md:col-span-2 space-y-2">
                      <Label className="text-gray-600 font-medium">
                        Departure Date
                      </Label>
                      <Input type="date" className="h-14 text-lg" />
                    </div>

                    <div>
                      <Button className="w-full h-14 text-lg font-bold bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 shadow-xl transform hover:scale-105 transition-all">
                        Search Flights
                      </Button>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="hotels" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-gray-600 font-medium">
                      Destination
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        placeholder="Where are you going?"
                        className="pl-10 h-12 text-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-600 font-medium">
                      Check-in
                    </Label>
                    <Input type="date" className="h-12 text-lg" />
                  </div>

                  <div className="space-y-2">
                    <Label className="text-gray-600 font-medium">
                      Check-out
                    </Label>
                    <Input type="date" className="h-12 text-lg" />
                  </div>

                  <div className="md:col-span-2 space-y-2">
                    <Label className="text-gray-600 font-medium">
                      Guests & Rooms
                    </Label>
                    <div className="relative">
                      <Users className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                      <Input
                        placeholder="2 Adults, 1 Room"
                        className="pl-10 h-12 text-lg"
                      />
                    </div>
                  </div>

                  <div className="md:col-span-2 mt-4">
                    <Button className="w-full h-14 text-lg font-semibold bg-gradient-to-r from-cyan-900 to-cyan-700 hover:from-cyan-900 hover:to-cyan-900 shadow-xl">
                      Search Hotels
                    </Button>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="holidays">
                <div className="text-center py-16">
                  <img src="./assets/package.jpg" className="bg-gray-200 border-2 border-dashed rounded-xl w-48 h-48 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Holiday Packages Coming Soon!
                  </h3>
                  <p className="text-gray-600">
                    Curated trips, all-inclusive deals, and dream getaways.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      </section>
      <div className="h-32" />
    </>
  );
}
