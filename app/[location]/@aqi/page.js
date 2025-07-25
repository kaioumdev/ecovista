import AQIComponent from "@/components/AQIComponent"

const AQIPage = ({ params: { location }, searchParams: { latitude, longitude } }) => {
    return <AQIComponent lat={latitude} lon={longitude}></AQIComponent>
}

export default AQIPage