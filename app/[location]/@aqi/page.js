
const AQIPage = async ({ params }) => {
    const locationData = await getLocationByName(params?.name);
    return (
        <div>page</div>
    )
}

export default AQIPage