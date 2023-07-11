const CalculateavgRating = reviews => {
    const totalRatintg = reviews?.reduce((acc,item) =>acc+item.rating,0);
    const avgRating =
     totalRatintg===0 ? " "
    : totalRatintg===1? totalRatintg 
    :(totalRatintg/reviews?.length).toFixed(1);

    return {
        totalRatintg, avgRating
    }
}

export default CalculateavgRating;