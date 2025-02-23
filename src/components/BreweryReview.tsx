import Review from "@/components/Review";

export default function BreweryReview() {
  const reviews = [
    {
      id: 211,
      user: {
        photo: "",
        nickname: "루피",
      },
      createdAt: new Date(),
      star: 4,
      txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      like: 25,
    },
    {
      id: 212,
      user: {
        photo: "",
        nickname: "조로",
      },
      createdAt: new Date(),
      star: 2,
      txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      like: 5,
    },
    {
      id: 213,
      user: {
        photo: "",
        nickname: "나미",
      },
      createdAt: new Date(),
      star: 4,
      txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      like: 33,
    },
    {
      id: 214,
      user: {
        photo: "",
        nickname: "우솝",
      },
      createdAt: new Date(),
      star: 2,
      txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      like: 51,
    },
    {
      id: 215,
      user: {
        photo: "",
        nickname: "상디",
      },
      createdAt: new Date(),
      star: 5,
      txt: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      like: 45,
    },
  ];
  return (
    <div className="">
      <ul className="text-gray">
        {reviews.map((review) => (
          <Review
            key={review.id}
            id={review.id}
            user={review.user.nickname}
            score={review.star}
            like={review.like}
          />
        ))}
      </ul>
    </div>
  );
}
