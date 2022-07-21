import { PostSubmission, Submission } from "../../types";

export const onRequestGet: PagesFunction = async () => {
  const data: Submission[] = [
    {
      title: "title",
      month: "jan",
      speakerEmail: "bill@billy.com",
      speakerName: "billy",
    },
  ];
  return new Response(
    JSON.stringify({
      data,
    })
  );
};

export const onRequestPost: PagesFunction = async ({ request }) => {
  const body: PostSubmission = await request.json();
  return new Response(JSON.stringify({ data: body.data }));
};
