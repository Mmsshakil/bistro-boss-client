
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center w-2/3 md:w-3/12 mx-auto mt-5">
           <p className="text-yellow-500">---{subHeading}---</p>
           <h3 className="text-3xl uppercase border-y-4 border-gray-700 p-4 mt-3 mb-5">{heading}</h3>
        </div>
    );
};

export default SectionTitle;