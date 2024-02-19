export default function Custom404() {
  return (
    <>
      <div className="flex items-center justify-center">
        <img src="/404.svg" alt="" />
        <h1>This page is not found</h1>
        <p>OOPS...Try Again :/</p>
        <a href="/" className="bg-[#4E3F63] p-9 text-white font-semibold">Home Page</a>
      </div>
    </>
    )
}
