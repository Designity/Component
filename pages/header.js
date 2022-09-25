export default function header() {
  return (
    <div className="h-[200px] w-full bg-primary_white  flex flex-col justify-center ">
      <div className="flex flex-col justify-center gap-2 ml-[130px]">
        <div>
          <h1 className="text-3xl font-normal leading-[125%]">All Post</h1>
        </div>
        <div className="flex justify-start gap-2 text-xs font-normal leading-[130%] text-primary_white_text">
          <p className="border-r-[2px] border-gray-300 pr-2">609,303 members</p>
          <p>
            <span className="h-[6px] w-[6px] bg-[#4bcdbc] rounded-full inline-block "></span>{" "}
            18,577 online
          </p>
        </div>
      </div>
    </div>
  );
}
