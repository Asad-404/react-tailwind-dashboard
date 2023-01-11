const Sidebar: React.FC = () => {
  const listItem = [
    {
      title: "Item 1",
      url: "/item-1",
      subMenus: [],
    },
    {
      title: "Item 2",
      url: "/item-2",
      subMenus: [],
    },
    {
      title: "Item 3",
      url: "/item-3",
      subMenus: [],
    },
    {
      title: "Item 4",
      url: "/item-4",
      subMenus: [],
    },
  ];
  return (
    <div className="h-screen bg-black w-80 py-8">
      <ul className="cursor-pointer">
        {listItem.map((el, index) => (
          <li className="py-3 px-8 hover:bg-dark border-b border-dark">
            {el.title}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Sidebar;
