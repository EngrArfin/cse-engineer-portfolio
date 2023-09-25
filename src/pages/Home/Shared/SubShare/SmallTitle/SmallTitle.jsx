
const SmallTitle = ({ smallHeading, smallSubHeading}) => {

    return (
        <div className="  mx-auto text-center md:w-2/12 ">
            <p className="text-yellow-600">{smallSubHeading}</p>
            <h3 className="text-3xl tracking-widest text-sky-600 uppercase italic ">{smallHeading}</h3>
            
        </div>
    );
};

export default SmallTitle;