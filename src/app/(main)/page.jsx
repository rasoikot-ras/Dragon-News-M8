import { redirect } from "next/navigation";




const default_category_id = "01";

const Home = async () => {
    redirect(`/category/${default_category_id}`);
};

export default Home;


// client jokhon first time asbe tokhon eikhaneo eii page ta e dekhbe prothom a 


