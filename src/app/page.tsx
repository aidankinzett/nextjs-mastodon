export default async function Home() {
  const res = await fetch("https://aidan.social/api/v1/timelines/public", {
    cache: "no-store",
  });
  
  const data = await res.json();

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
