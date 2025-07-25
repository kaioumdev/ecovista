import AQIComponent from "@/components/AQIComponent"
import NoLocationInfo from "@/components/NoLocationInfo";

const AQIPage = async ({
    params: { location },
    searchParams: { latitude, longitude },
}) => {
    const resolved = await getResolvedLatLong(location, latitude, longitude);

    if (resolved?.lat && resolved?.lon) {
        return <AQIComponent lat={resolved.lat} lon={resolved.lon} />;
    } else {
        return <NoLocationInfo />;
    }
};

export default AQIPage;