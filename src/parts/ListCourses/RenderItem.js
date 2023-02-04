import IconPlay from "public/images/icon_play.svg";

export default function RenderItem({ item }) {
  return (
    <div className="w-1/4 px-4">
      <div className="item">
        <div className="item-image">
          <img
            src={item?.thumbnail ?? ""}
            alt={data?.name ?? "some information"}
          />
        </div>
      </div>
    </div>
  );
}
