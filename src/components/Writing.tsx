import WritingBrewery from "@/components/forms/WritingBrewery";
import WritingFestival from "@/components/forms/WritingFestival";
import WritingSuul from "@/components/forms/WritingSuul";
import { useParams, useSearchParams } from "react-router-dom";

export default function Writing() {
  const { type } = useParams();
  const [query, setQuery] = useSearchParams();

  const id = query.get("id") || "";
  console.log(">>", id);
  if (type === "brewery") {
    return <WritingBrewery id={id} />;
  } else if (type === "suul") {
    return <WritingSuul />;
  } else if (type === "festival") {
    return <WritingFestival />;
  }
}
