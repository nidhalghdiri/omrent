"use client";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { Suspense } from "react";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This Property is closed to Beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This Property has Windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This Property is modern",
  },
  {
    label: "CountrySide",
    icon: TbMountain,
    description: "This Property is in the country side",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "This Property has a pool!",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "This Property is on an island!",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "This Property is close to a lake!",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "This Property has skiing activities!",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "This Property is in a casle!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This Property is in Forest Camp!",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "This Property is in Arctic!",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "This Property is a Cake!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This Property in Desert!",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "This Property in the Barn!",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "This Property is Luxurious!",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Container>
        <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
          {categories.map((item, i) => (
            <CategoryBox
              key={i}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            />
          ))}
        </div>
      </Container>
    </Suspense>
  );
};

export default Categories;
