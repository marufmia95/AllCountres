import { useLoaderData } from "react-router-dom";
import SingleCountry from "./SingleCountry";
import PageLocation from "../../../../components/PageLocation";

const AllCountres = () => {
    const allcountres = useLoaderData();
    console.log(allcountres);

    return (
      <>
      <PageLocation preb='/' next='/allcountres'></PageLocation>
        <div className="countres">
            <div className="index">
                <h1 className="text-center text-[#ff00ff] mb-6 font-bold text-2xl capitalize pt-8 md:pt-20">
                    AllCountres
                </h1>
                <div className="flex justify-center md:justify-between flex-wrap container mx-auto borde">
                    {allcountres.map((country, i) => (
                        <SingleCountry country={country} key={i}></SingleCountry>
                    ))}
                </div>
            </div>
        </div>
      </>
    );
};

export default AllCountres;
