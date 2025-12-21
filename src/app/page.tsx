import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import HeroCarousel from "@/components/HeroCarousel";

export default function Home() {
  return (
    <>
      <HeroCarousel />

      <section className="max-w-5xl mx-auto -mt-10 relative z-10">
        <Card className="p-8 shadow-xl">
          <Tabs defaultValue="flights" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="flights">Flights</TabsTrigger>
              <TabsTrigger value="hotels">Hotels</TabsTrigger>
              <TabsTrigger value="holidays">Holidays</TabsTrigger>
            </TabsList>

            <TabsContent value="flights">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label>From</Label>
                  <Input placeholder="City/Airport" />
                </div>
                <div>
                  <Label>To</Label>
                  <Input placeholder="City/Airport" />
                </div>
                <div>
                  <Label>Depart</Label>
                  <Input type="date" />
                </div>
                <div className="flex items-end">
                  <Button className="w-full">Search Flights</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="hotels">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <Label>Destination</Label>
                  <Input placeholder="Where are you going?" />
                </div>
                <div>
                  <Label>Check-in</Label>
                  <Input type="date" />
                </div>
                <div>
                  <Label>Check-out</Label>
                  <Input type="date" />
                </div>
                <div className="flex items-end col-span-1 md:col-span-4">
                  <Button className="w-full">Search Hotels</Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="holidays">
              <p className="text-center py-8 text-gray-500">
                Holiday packages coming soon!
              </p>
            </TabsContent>
          </Tabs>
        </Card>
      </section>

      <div className="h-96" />
    </>
  );
}
