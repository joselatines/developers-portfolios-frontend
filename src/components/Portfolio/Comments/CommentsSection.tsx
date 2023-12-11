import React, { useCallback, useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";
import { FaEye } from "react-icons/fa";
import { IComment } from "../../../shared/interfaces/comments.interface";
import Comment from "./Comment";
import RatePortfolioForm from "../../Forms/RatePortfolioForm";
import ErrorHandler from "../../shared/Error";
import LoaderHandler from "../../shared/Loader";
import { getComments } from "../../../services/comments.service";

interface IProps {
  portfolioId: string;
}

const CommentsSection: React.FC<IProps> = ({ portfolioId }) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [showComments, setShowComments] = useState(true);
  const [refresh, setRefresh] = useState(0);

  const fetchData = useCallback(async () => {
    try {
      const res = await getComments();
      setData(res.data);
    } catch (error: any) {
      setError(error);
    }
  }, [refresh]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleRefresh = useCallback(() => {
    setRefresh((prev) => prev + 1);
  }, []);

  if (error) return <ErrorHandler errorMessage={error.message} />;
  if (!data) return <LoaderHandler />;

  const toggleComments = () => setShowComments((prev) => !prev);

  return (
    <>
      <RatePortfolioForm
        portfolioId={portfolioId}
        refreshParent={handleRefresh}
      />

      <Button
        className="mb-6 mt-8 center flex gap-1"
        colorScheme="teal"
        onClick={toggleComments}
      >
        <FaEye /> {showComments ? "Hide comments" : "Show comments"}
      </Button>

      <span className="text-xl font-bold">Comment section</span>
      <section className={showComments ? "h-56 overflow-auto" : "hidden"}>
        <div className="flex flex-col">
          {data.data.map((comment: IComment) => (
            <Comment
              key={comment.id}
              data={comment}
              refreshParent={handleRefresh}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CommentsSection;
