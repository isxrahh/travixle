import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";
import { destinations } from "@/constants";

const TripPlanner = () => {
  return (
    <div className="space-y-4 p-32">
      <h1 className="text-gray-800 text-3xl font-bold">
        Quick and easy trip planner
      </h1>
      <h3 className="text-gray-500">
        Pick a vibe and explore the top destinations in India.
      </h3>
      <div className="mt-6 mb-12">
        <Button
          variant="outline"
          className="text-blue-600 hover:text-blue-700 rounded-full p-6 border-blue-500 hover:bg-blue-200 bg-blue-100 mr-4"
        >
          Shopping & Markets
        </Button>
        <Button
          variant="outline"
          className="text-blue-600 hover:text-blue-700 rounded-full p-6 border-blue-500 hover:bg-blue-200 bg-blue-100 mr-4"
        >
          Culinary Tours
        </Button>
        <Button
          variant="outline"
          className="text-blue-600 hover:text-blue-700 rounded-full p-6 border-blue-500 hover:bg-blue-200 bg-blue-100 mr-4"
        >
          Historical Exploration
        </Button>
        <Button
          variant="outline"
          className="text-blue-600 hover:text-blue-700 rounded-full p-6 border-blue-500 hover:bg-blue-200 bg-blue-100 mr-4"
        >
          Festivals
        </Button>
      </div>

      <div className="w-full px-2">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 mb-6">
            {destinations.map((item) => (
              <CarouselItem
                key={item.id}
                className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
              >
                <div className="group h-full">
                  <Card className="h-full overflow-hidden border-0 shadow-md hover:shadow-2xl transition-all duration-500 rounded-2xl flex flex-col">
                    <div className="relative -top-[22px] overflow-hidden flex-shrink-0 h-64 md:h-48">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    </div>

                    <CardContent className="flex flex-col justify-between flex-grow p-6 md:py-2 bg-white relative -top-8">
                      <div>
                        <h3 className="text-2xl md:text-xl font-bold text-gray-900 mb-3 leading-tight">
                          {item.name}
                        </h3>
                        <p className="pt-2 text-base md:text-sm text-gray-700 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-4 md:left-8 bg-white/90 hover:bg-white shadow-xl" />
          <CarouselNext className="right-4 md:right-8 bg-white/90 hover:bg-white shadow-xl" />
        </Carousel>
      </div>
    </div>
  );
};

export default TripPlanner;
