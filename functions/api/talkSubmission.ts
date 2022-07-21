import { PostSubmission, Submission } from "../../types";

export const onRequestGet: PagesFunction<{
  SPEAKER_SUBMIT_STORE: KVNamespace;
}> = async ({ env }) => {
  const itemPromise: Promise<Submission>[] = (
    await env.SPEAKER_SUBMIT_STORE.list()
  ).keys.map(async (key) => {
    const item = await env.SPEAKER_SUBMIT_STORE.get(key.name);
    return JSON.parse(item);
  });
  const data = await Promise.all(itemPromise);
  return new Response(
    JSON.stringify({
      data,
    })
  );
};

export const onRequestPost: PagesFunction<{
  SPEAKER_SUBMIT_STORE: KVNamespace;
}> = async ({ request, env }) => {
  const id = crypto.randomUUID();
  const body: PostSubmission = await request.json();
  env.SPEAKER_SUBMIT_STORE.put(id, JSON.stringify({ id, ...body.data }));
  return new Response(JSON.stringify({ message: "Stored", data: body.data }));
};
