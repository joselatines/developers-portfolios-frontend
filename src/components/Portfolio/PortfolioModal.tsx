import { BsGithub } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import RatePortfolioForm from "../Forms/RatePortfolioForm";
import CommentsSection from "../shared/Comments/CommentsSection";
import { Button } from "@chakra-ui/react";
import { useState } from "react";

function PortfolioModal({ data }: any) {
    const { images, title, description, User } = data;
    const [showComments, setShowComments] = useState(false);

    return (
        <article className="grid grid-cols-2 max-h-80vh">
            <section className="p-8">
                <h2 className="text-5xl font-bold">{title}</h2>
                <p className="mb-4 mt-5">{description}</p>
                <ul className="flex gap-2 wrap">
                    <li>
                        <a href="#"><AiOutlineLink size={32}/></a>
                    </li>
                    <li>
                        <a href="#"><BsGithub size={32} /></a>
                    </li>
                </ul>
                <section className="mt-10">
                    <RatePortfolioForm />
                    <Button onClick={() => setShowComments(prev => !prev)} colorScheme="white" variant='outline'>
                        Show comments
                    </Button>
                    <div className=" ">
                        <CommentsSection/>
                    </div>
                </section>
            </section>
            <section>
                <img
                    className="w-full h-64 object-cover h-[100%]"
                    src={images[0]}
                    alt="Portfolio"
                />
            </section>
        </article>
    );
}

export default PortfolioModal;
