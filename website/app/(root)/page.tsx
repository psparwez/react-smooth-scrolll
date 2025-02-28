import FeatureRequest from "@/components/FeatureRequest";
import { AvailableProps } from "./_components/AvailableProps/AvailableProps";
import CustomizingBehaviour from "./_components/CustomizingBehaviour/CustomizingBehaviour";
import { Hero } from "./_components/Hero/Hero";
import { Installation } from "./_components/Installation/Installation";
import { Usage } from "./Usages/Usages";
import SettingsCustomize from "@/components/SettingsCustomize";

export default function Home() {
    return (
        <>
            <Hero />
            <Installation />
            <Usage />
            <CustomizingBehaviour />
            <AvailableProps />
            <FeatureRequest />

            <SettingsCustomize />


        </>
    )
}
