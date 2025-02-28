import FeatureRequest from "@/components/FeatureRequest";
import { AvailableProps } from "./_components/AvailableProps/AvailableProps";
import CustomizingBehaviour from "./_components/CustomizingBehaviour/CustomizingBehaviour";
import { Hero } from "./_components/Hero/Hero";
import { Installation } from "./_components/Installation/Installation";
import { Usage } from "./Usages/Usages";

export default function Home() {
    return (
        <>
            <Hero />
            <Installation />
            <Usage />
            <CustomizingBehaviour />
            <AvailableProps />
            <FeatureRequest />


        </>
    )
}
