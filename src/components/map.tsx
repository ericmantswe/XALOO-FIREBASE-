'use client';

import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps';

export function MapComponent() {
  const position = { lat: -22.547, lng: 27.126 };
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return (
      <div className="flex h-full min-h-[400px] w-full items-center justify-center bg-muted">
        <div className="text-center">
          <p className="font-semibold">Map not available</p>
          <p className="text-sm text-muted-foreground">Google Maps API Key is missing.</p>
        </div>
      </div>
    );
  }

  return (
    <APIProvider apiKey={apiKey}>
      <div className="h-full min-h-[400px] w-full">
        <Map
          defaultCenter={position}
          defaultZoom={15}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId="e8c237a35d9a32a0"
        >
          <AdvancedMarker position={position} title="Xaloo Technologies" />
        </Map>
      </div>
    </APIProvider>
  );
}
