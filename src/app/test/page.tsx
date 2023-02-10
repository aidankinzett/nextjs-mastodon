import axios from "axios";

export default async function Test() {
  const { data } = await axios.get(
    "https://aidan.social/api/v1/timelines/public"
  );

  return (
    <main className="container">
      <div className="flex flex-col">
        {data.map((toot: any) => (
          <div className="border-2 border-black">
            <h1 className="text-xl">{toot.account.display_name}</h1>
            <div className="prose">
              <div
                dangerouslySetInnerHTML={{ __html: toot.content as string }}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
