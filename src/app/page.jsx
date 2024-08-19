"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  DevicePhoneMobileIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/16/solid";
import { useRouter } from "next/router";
import {
  navbarComponents,
  heroComponents,
  logoCloudComponents,
  featureComponents,
  statsComponents,
  ctaComponents,
  footerComponents,
  seedComponents,
} from "../utils/dynamicImports";
import { Link } from "@/components/ui/link";
import { Button } from "@/components/ui/button";
import { Heading, Subheading } from "@/components/ui/heading";
import { useComponentsContext } from "@/contexts/ComponentsContext";
import Container from "@/components/ui/Container";
import {
  DescriptionDetails,
  DescriptionList,
  DescriptionTerm,
} from "@/components/ui/description-list";
import { Field, Label } from "@/components/ui/fieldset";
import { Textarea } from "@headlessui/react";

const Page = () => {
  // const [isLoading, setIsLoading] = useState(true);
  const { components } = useComponentsContext();
  const [url, setUrl] = useState("/");
  const [customUrl, setCustomUrl] = useState("");

  const [iframeWidth, setIframeWidth] = useState(1296); // Default width
  const resizerRef = useRef(null);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = (e) => {
    e.preventDefault();
    setIsResizing(true);

    const startX = e.clientX;
    const startWidth = iframeWidth;

    const handleMouseMove = (e) => {
      console.log("inside mouse move");
      const newWidth = startWidth + (e.clientX - startX);
      if (newWidth > 360 && newWidth <= 1296) {
        // Setting min and max width
        setIframeWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      console.log("inside mouse up");
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    console.log("adding mousemove");
    document.addEventListener("mousemove", handleMouseMove);
    console.log("adding mouseup");
    document.addEventListener("mouseup", handleMouseUp);
  };

  // const isSeeded = useRef(false);

  const loadComponents = (preview) => {
    const randomHeroIdx = Math.floor(
      Math.random() * components.heroComponents.length
    );
    const randomNavbarIdx = Math.floor(
      Math.random() * components.navbarComponents.length
    );
    const randomLogoCloudIdx = Math.floor(
      Math.random() * components.logoCloudComponents.length
    );
    const randomFeatureIdx = Math.floor(
      Math.random() * components.featureComponents.length
    );
    const randomStatsIdx = Math.floor(
      Math.random() * components.statsComponents.length
    );
    const randomCTAIdx = Math.floor(
      Math.random() * components.ctaComponents.length
    );
    const randomFooterIdx = Math.floor(
      Math.random() * components.footerComponents.length
    );

    if (preview) {
      setCustomUrl(
        `nav-${randomNavbarIdx}-hero-${randomHeroIdx}-logocloud-${randomLogoCloudIdx}-feature-${randomFeatureIdx}-stats-${randomStatsIdx}-cta-${randomCTAIdx}-footer-${randomFooterIdx}`
      );
      return;
    }

    setUrl(
      `/preview/hero-${randomHeroIdx}-logocloud-${randomLogoCloudIdx}-feature-${randomFeatureIdx}-stats-${randomStatsIdx}-cta-${randomCTAIdx}-footer-${randomFooterIdx}`
    );
    console.log("Generated URL:", url);
  };

  // useEffect(() => {
  //   const initializeComponents = async () => {
  //     if (!isSeeded.current) {
  //       try {
  //         await seedComponents(); // Seed all components on initial render
  //         isSeeded.current = true;
  //         loadComponents(); // Generate the random component selection
  //         setIsLoading(false); // Set loading to false once done
  //       } catch (e) {
  //         console.warn("Failed to load components. Error: ", e);
  //       }
  //     }
  //   };
  //   initializeComponents();
  // }, []);

  // if (isLoading) return <div>Loading...</div>;

  const handleCustomUrl = () => {};

  return (
    // <Container>
    <div className="grid grid-cols-1 lg:grid-cols-5 place-items-center pt-32">
      <div className="lg:w-96 col-span-2">
        <Subheading className="flex flex-col ">
          Components
          <span className="text-xs">format: componentname-idx</span>
          <span className="text-xs">idx starts at 0</span>
        </Subheading>
        <DescriptionList className="mt-4">
          <DescriptionTerm className="flex flex-col">
            Hero Sections
            <span className="-mt-1 text-xs">code: hero-idx</span>
          </DescriptionTerm>
          <DescriptionDetails>12 components</DescriptionDetails>

          <DescriptionTerm className="flex flex-col">
            Logo Clouds
            <span className="-mt-1 text-xs">code: logocloud-idx</span>
          </DescriptionTerm>
          <DescriptionDetails>12 components</DescriptionDetails>

          <DescriptionTerm className="flex flex-col">
            Feature Sections
            <span className="-mt-1 text-xs">code: feature-idx</span>
          </DescriptionTerm>
          <DescriptionDetails>18 components</DescriptionDetails>

          <DescriptionTerm className="flex flex-col">
            Stats
            <span className="-mt-1 text-xs">code: stats-idx</span>
          </DescriptionTerm>
          <DescriptionDetails>10 components</DescriptionDetails>

          <DescriptionTerm className="flex flex-col">
            CTA Sections
            <span className="-mt-1 text-xs">code: cta-idx</span>
          </DescriptionTerm>
          <DescriptionDetails>11 components</DescriptionDetails>

          <DescriptionTerm className="flex flex-col">
            Footers
            <span className="-mt-1 text-xs">code: footer-idx</span>
          </DescriptionTerm>
          <DescriptionDetails>10 components</DescriptionDetails>
        </DescriptionList>
      </div>
      <div className="gap-y-3 col-span-3 flex flex-col items-center lg:min-w-[600px] ">
        <Heading>Landing Page Generator</Heading>
        <Button onClick={() => loadComponents(false)}>Generate Page</Button>
        <Link
          href={url}
          className="text-blue-500 underline hover:text-blue-800"
          target="_blank"
        >
          {url}
        </Link>
      </div>

      {/* place-items-center h-screen */}
      {/* min w 91vw prevents resizing frame from shifting layout */}
      <div className="flex col-span-5 justify-between py-32 space-x-10 no-scrollbar min-w-[91vw]">
        <Field className="flex flex-col ">
          <Label>Create a custom page</Label>
          <Textarea
            name="description"
            className="border border-black w-96 rounded-lg h-40 p-4 text-gray-700 text-sm"
            placeholder="hero-10-logocloud-4-feature-3-stats-4-feature-8-cta-9-footer-3"
            onChange={(e) => setCustomUrl(e.target.value)}
            value={customUrl}
          />
          <div className="flex self-center gap-x-3 mt-2">
            <Button onClick={() => setIframeWidth(360)}>
              <DevicePhoneMobileIcon />
              Mobile
            </Button>
            <Button onClick={() => setIframeWidth(768)}>
              <DeviceTabletIcon />
              Tablet
            </Button>
            <Button onClick={() => setIframeWidth(1296)}>
              <ComputerDesktopIcon />
              Desktop
            </Button>
          </div>
          <Button
            className="mt-4"
            onClick={() => {
              loadComponents(true);
              console.log("customUrl: ", customUrl);
            }}
          >
            Generate Page
          </Button>
        </Field>

        <div className="  pl-10 py-10 flex-1 ">
          <div className=" relative " style={{ width: `${iframeWidth}px` }}>
            <iframe
              src={`/preview/${customUrl}`}
              className="w-full h-[90vh] rounded-lg ring-1 no-scrollbar ring-slate-900/10"
              title="Live Preview"
            ></iframe>

            {/* Resizer Handle */}
            <div
              onMouseDown={handleMouseDown}
              className="absolute top-0 right-0 h-full w-4  cursor-ew-resize "
              ref={resizerRef}
            />
            {/* Transparent overlay to prevent iframe from capturing mouse events */}
            {isResizing && (
              <div className="absolute inset-0 bg-transparent z-10"></div>
            )}
          </div>
        </div>
      </div>
    </div>
    // </Container>
  );
};

export default Page;
