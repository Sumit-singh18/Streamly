import userProfile from "../assets/user_profile.svg";

const Comments = [
  {
    name: "Rohit",
    comment: "Loved how clearly you explained this topic!",
    replies: [],
  },
  {
    name: "Sneha",
    comment: "Such a good tutorial, I finally understood recursion 😍",
    replies: [
      {
        name: "Amit",
        comment: "Exactly! The visuals made it so simple.",
        replies: [
          {
            name: "Priya",
            comment: "I agree, should make more videos like this!",
            replies: [],
          },
          {
            name: "Vikram",
            comment: "He deserves way more subscribers for this content.",
            replies: [],
          },
        ],
      },
      {
        name: "Anjali",
        comment: "Please make one on async/await next 🙏",
        replies: [
          {
            name: "Sumit",
            comment: "Yes! Async/await confuses me every time 😅",
            replies: [],
          },
          {
            name: "Ravi",
            comment: "Would love a playlist on JS promises too!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Arjun",
    comment: "You just earned a new subscriber! 🎯",
    replies: [
      {
        name: "Pooja",
        comment: "Same here! Subscribed right after watching!",
        replies: [],
      },
      {
        name: "Rohan",
        comment: "Honestly underrated creator. Great work!",
        replies: [],
      },
    ],
  },
  {
    name: "Neha",
    comment: "This video deserves to go viral!",
    replies: [
      {
        name: "Sahil",
        comment: "Absolutely! The explanation was crystal clear.",
        replies: [
          {
            name: "Tina",
            comment: "And that little animation part was so helpful!",
            replies: [],
          },
          {
            name: "Kabir",
            comment: "Agreed. Smooth transitions made it easy to follow.",
            replies: [
              {
                name: "Aditi",
                comment: "The pacing was just perfect too!",
                replies: [],
              },
              {
                name: "Reena",
                comment: "Hope he keeps uploading regularly ❤️",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Deepak",
        comment: "I’ve shared it with my entire team!",
        replies: [],
      },
    ],
  },
  {
    name: "Manish",
    comment: "Thanks bro, saved my project submission!",
    replies: [
      {
        name: "Karan",
        comment: "Haha same! Copied your explanation word for word 😅",
        replies: [],
      },
      {
        name: "Meena",
        comment: "Please pin your GitHub repo for this project 🙌",
        replies: [],
      },
    ],
  },
  {
    name: "Divya",
    comment: "Clean and to the point — subscribed instantly!",
    replies: [
      {
        name: "Ankit",
        comment: "The best tutorial I’ve seen this week 🔥",
        replies: [],
      },
      {
        name: "Sonia",
        comment: "Can you make one on React Suspense next?",
        replies: [],
      },
    ],
  },
];

const CommentSection = ({ data }) => {
  const { name, comment } = data;
  return (
    <div className="flex m-2 border  border-gray-200 bg-gray-100 p-2 rounded-2xl ">
      <img className="w-10 h-10 " src={userProfile} alt="ProfileImg" />
      <div className=" mx-2">
        <p className="font-bold ">{name} </p>
        <p className="font-medium">{comment}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => (
  <div className="  ">
    {comments.map((comment, index) => (
      <div key={index} className=" ml-3   ">
        {/* Single Comment */}
        <CommentSection data={comment} />

        {/* Replies (nested comments) */}
        {comment.replies && comment.replies.length > 0 && (
          <div className="ml-6 mt-3 border-l-2 border-gray-400 pl-4 ">
            <CommentList comments={comment.replies} />
          </div>
        )}
      </div>
    ))}
  </div>
);

const CommentConatiner = () => {
  return (
    <>
      <div className="p-2 m-2  text-2xl font-bold">Comments:</div>
      <CommentList comments={Comments} />
    </>
  );
};

export default CommentConatiner;
