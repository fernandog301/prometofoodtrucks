"use client";
import React, { useState, useCallback, useEffect, useRef } from "react";
import {
    AddressAutofill,
    AddressMinimap,
    useConfirmAddress,
    config,
} from "@mapbox/search-js-react";
import { Button } from "@mui/material";

interface Feature {
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
    const [showValidationText, setShowValidationText] = useState<boolean>(false);
    const [token, setToken] = useState<string>("");

    useEffect(() => {
        const accessToken: string =
            "pk.eyJ1IjoiZmVybmFuZG9nMzAxIiwiYSI6ImNsdGdncnd2ZjExamgyanNiZXQ0NTRmcmsifQ.Hsv6Ht580GomA2oEK5ZMeQ";
        setToken(accessToken);
        config.accessToken = accessToken;
    }, []);

    // const formRef = useRef<HTMLFormElement>(null);

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
        },
        [setFeature, setShowMinimap]
    );

    function handleSaveMarkerLocation(coordinate: any) {
        console.log(`Marker moved to longitude ${JSON.stringify(coordinate[0])}º.`);
        console.log(`Marker moved to latitude ${JSON.stringify(coordinate[1])}º.`);
    }

    const handleSubmit = useCallback(
        async (e: React.FormEvent) => {
            e.preventDefault();
            const result = await showConfirm();
            if (result.type === "nochange") {
                submitForm();
            }
        },
        [showConfirm]
    );

    function submitForm() {
        setShowValidationText(true);
        setTimeout(() => {
            resetForm();
        }, 2500);
    }

    function resetForm() {
        // console.log('Document:', document);
        const inputs = document.querySelectorAll("input");
        inputs.forEach((input: HTMLInputElement) => (input.value = ""));
        setShowFormExpanded(false);
        setShowValidationText(false);
        setFeature(null);
    }

    return (
        <div className="add-location-container">
            <form
                ref={formRef}
                className="flex flex-col px-6"
                onSubmit={handleSubmit}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    <div className="my-3 col-span-2">
                        <h1 className="text-3xl text-center mb-3">Add Food Truck Data</h1>
                        <hr className="" />
                    </div>

                    <div className="w-full">
                        {/* Input form */}
                        <label className="text-sm font-bold text-gray-700 mb-3">
                            Address
                        </label>

                        {/* @ts-ignore */}
                        <AddressAutofill accessToken={token} onRetrieve={handleRetrieve}>
                            <input
                                className="w-full h-10 px-3 py-2 rounded mb-3"
                                placeholder="Address"
                                autoComplete="address-line1"
                                id="mapbox-autofill"
                            />
                        </AddressAutofill>

                        {/* {!showFormExpanded && (
                            <div
                                id="manual-entry"
                                className="w-full mt-2 text-sm text-gray-600 border-b border-gray-400 hover:border-black cursor-pointer"
                                onClick={() => setShowFormExpanded(true)}
                            >
                                Enter an address manually
                            </div>
                        )} */}

                        <div className="">

                            <label className="text-sm font-bold text-gray-700 mb-3">
                                City
                            </label>
                            <input
                                className="w-full h-10 px-3 py-2 rounded mb-3"
                                placeholder="City"
                                autoComplete="address-level2"
                            />

                            <label className="text-sm font-bold text-gray-700 mb-3">
                                State / Region
                            </label>
                            <input
                                className="w-full h-10 px-3 py-2 rounded mb-3"
                                placeholder="State / Region"
                                autoComplete="address-level1"
                            />

                            <label className="text-sm font-bold text-gray-700 mb-3">
                                ZIP / Postcode
                            </label>
                            <input
                                className="w-full h-10 px-3 py-2 rounded mb-3"
                                placeholder="ZIP / Postcode"
                                autoComplete="postal-code"
                            />

                            <label className="text-sm font-bold text-gray-700 mb-3">
                            schedule
                            </label>
                            <select className="w-full h-10 rounded mb-3">
                                <option value="mens & womens">Men's and Women's</option>
                                <option value="gender neutral">Gender neutral</option>
                                <option value="family restroom">Family restroom</option>
                            </select>

                            <label className="text-sm font-bold text-gray-700 mb-3">
                            description
                            </label>
                            <select className="w-full h-10 rounded mb-3">
                                <option value="individual">Individual</option>
                                <option value="shared">Shared</option>
                            </select>

                            <label className="text-sm font-bold text-gray-700 mb-3">
                            category
                            </label>
                            <input
                                className="w-full h-10 px-3 py-2 rounded mb-3"
                                placeholder="Enter number of stalls"
                            />

                        

                            <label className="text-sm font-bold text-gray-700 mb-3">
                                Hours of operation
                            </label>
                            <input
                                className="w-full h-10 px-3 py-2 rounded mb-3"
                                placeholder="Enter hours of operation"
                            />

                            

                            
                            <label className="text-sm font-bold text-gray-700 mb-3">
                            menuItems
                            </label>
                            <select className="w-full h-10 rounded mb-3">
                                <option value="very clean">item Name</option>
                                
                                <option value="average">item Price</option>
                                
                            </select>
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

                {/* Form buttons */}
                {showFormExpanded && (
                    <div className="mb-8">
                        <Button variant="contained" type="submit" className="mr-3">
                            Add Bathroom
                        </Button>
                        <Button
                            variant="outlined"
                            type="button"
                            color="info"
                            className="ml-3"
                            onClick={resetForm}
                        >
                            Reset
                        </Button>
                    </div>
                )}
            </form>

            {/* Validation text */}
            {showValidationText && (
                <div id="validation-msg" className="mt-6 text-md font-bold">
                    Bathroom successfully submitted.
                </div>
            )}
        </div>
    );
}
