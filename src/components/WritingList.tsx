export default function WritingList() {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5  gap-3">
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
        <li className="border border-gray-400 rounded-md">
          <div>
            <img src="" alt="" />
            <div className="txt px-2">
              <h4 className="title">제목</h4>
              <p>설명글</p>
            </div>
            <div className="px-2">
              <p>[Category] YYYY.MM.dd hh:mm</p>
              <p>Writer</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
