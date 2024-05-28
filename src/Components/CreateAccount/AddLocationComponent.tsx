import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  AddressAutofill,
  AddressMinimap,
  useConfirmAddress,
  config,
} from "@mapbox/search-js-react";
import { useSignUpContext } from "@/context/Context";

interface Feature {
  geometry: {
    coordinates: number[]
  }
  properties: {
    match_code: {
      confidence: string;
    };
  };
}

export default function AddLocationComponent() {
  const [showFormExpanded, setShowFormExpanded] = useState<boolean>(false);
  const [showMinimap, setShowMinimap] = useState<boolean>(false);
  const [feature, setFeature] = useState<Feature | null>(null);
  const [token, setToken] = useState<string>("");

  const { longitude, setLongitude, latitude, setLatitude, address, setAddress, city, setCity, state, setState, zipCode, setZipCode } = useSignUpContext();

  useEffect(() => {
    const accessToken: string =
      "pk.eyJ1IjoiZmVybmFuZG9nMzAxIiwiYSI6ImNsdGdncnd2ZjExamgyanNiZXQ0NTRmcmsifQ.Hsv6Ht580GomA2oEK5ZMeQ";
    setToken(accessToken);
    config.accessToken = accessToken;
  }, []);

  const { formRef, showConfirm } = useConfirmAddress({
    minimap: true,
    skipConfirmModal: (feature: Feature) => {
      return ["exact", "high"].includes(
        feature.properties.match_code.confidence
      );
    },
  });

  const handleRetrieve = useCallback(
    (res: any) => {
      const feature: Feature = res.features[0];
      setFeature(feature);
      setShowMinimap(true);
      setShowFormExpanded(true);

      // Extract and set coordinates
      const [longitude, latitude] = feature.geometry.coordinates;
      setLongitude(longitude);
      setLatitude(latitude);

      // Extract and set address components
      const address = res.features[0].place_name || "";
      const cityContext = res.features[0].context?.find((c: any) =>
        c.id.includes("place")
      );
      const stateContext = res.features[0].context?.find((c: any) =>
        c.id.includes("region")
      );
      const zipCodeContext = res.features[0].context?.find((c: any) =>
        c.id.includes("postcode")
      );

      setAddress(address);
      setCity(city);
      setState(state);
      setZipCode(zipCode);

      console.log(`Longitude: ${longitude}º, Latitude: ${latitude}º`);
      console.log(`Address: ${address}`);
      console.log(`City: ${city}`);
      console.log(`State: ${state}`);
      console.log(`ZIP Code: ${zipCode}`);
    },
    [setFeature, setShowMinimap, setLongitude, setLatitude, setAddress, setCity, setState, setZipCode]
  );


  useEffect(() => {
    handleSaveMarkerLocation
  },[handleRetrieve])

  function handleSaveMarkerLocation(coordinate: any) {
    console.log(`Marker moved to longitude ${JSON.stringify(coordinate[0])}º.`);
    console.log(`Marker moved to latitude ${JSON.stringify(coordinate[1])}º.`);
  }

  return (
    <div>
      <form
        ref={formRef}
        className="flex flex-col"
      >
        <div className="flex flex-col">
          <div className="my-3 col-span-2">
            <h1 className="text-3xl text-center mb-3">Add Food Truck Data</h1>
            <hr className="" />
          </div>

          <div className="flex flex-col">
            {/* Input form */}
            <p>
              Address
            </p>

            {/* @ts-ignore */}
            <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
              <input className="rounded-lg text-xs w-full my-2 py-2 px-[0.75rem] border-[#6B7280] border-solid border-[1px] focus:outline-none" placeholder="Address"
                autoComplete="address-line1"
                id="mapbox-autofill"
              />
            </AddressAutofill>
            <div className="flex flex-col">
              <p>
                City
              </p>
              <input className="rounded-lg text-xs w-full my-2 py-2 px-[0.75rem] border-[#6B7280] border-solid border-[1px] focus:outline-none" placeholder="City" autoComplete="address-level2" onChange={(e) => setCity(e.target.value)}/>
              <p>
                State / Region
              </p>
              <input className="rounded-lg text-xs w-full my-2 py-2 px-[0.75rem] border-[#6B7280] border-solid border-[1px] focus:outline-none" placeholder="State" autoComplete="address-level1" onChange={(e) => setState(e.target.value)} />
              <p>
                ZIP / Postcode
              </p>
              <input className="rounded-lg text-xs w-full my-2 py-2 px-[0.75rem] border-[#6B7280] border-solid border-[1px] focus:outline-none" placeholder="ZIP / Postcode"
                autoComplete="postal-code" onChange={(e) => setZipCode(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            {/* Visual confirmation map */}
            <div id="minimap-container" className="h-64 w-96 relative mt-4">
              {/* @ts-ignore */}
              <AddressMinimap
                canAdjustMarker={true}
                satelliteToggle={true}
                // @ts-ignore
                feature={feature}
                show={showMinimap}
                onSaveMarkerLocation={handleSaveMarkerLocation}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}