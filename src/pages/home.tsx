import { useState, useEffect } from "react";
import {
  About,
  Advantage,
  Header,
  BannerCatalog,
  TeaCard,
  Footer,
  TeaList
} from "../widgets";
import Button from "../shared/Button/Button";

// ✅ Описание типа одного чая
interface TeaItem {
  name: string;
  description: string;
  price: string;
}

export const Home = () => {
  // ✅ Массив чаёв
  const [items, setItems] = useState<TeaItem[]>([]);
  const [isModalActive, setModalActive] = useState(false);

  // 📦 Загрузка чаёв с сервера
  useEffect(() => {
    fetch("http://localhost:3001/api/teas")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Ошибка загрузки чаёв:", err));
  }, []);

  // ➕ Добавление нового чая
  function AddItemToList(itemData: FormData) {
    const name = itemData.get("name") as string;
    const description = itemData.get("description") as string;
    const price = itemData.get("price") as string;

    const result: TeaItem = {
      name,
      description,
      price
    };

    if (name || description || price) {
      setItems((prev) => [result, ...prev]);
    }
  }

  return (
    <>
      {/* Модальное окно */}
      <div
        className={`w-[100svw] h-[100svh] fixed flex justify-center items-center z-[1000] ${
          isModalActive ? "visible" : "invisible"
        }`}
      >
        <div
          onClick={() => setModalActive(false)}
          className="bg-black bg-opacity-50 absolute w-full h-full"
        ></div>

        <div className="max-w-[400px] bg-[#F5FEF0] w-full rounded-[10px] p-[25px] z-[1000]">
          <form action={AddItemToList}>
            <label>
              Название:
              <input
                name="name"
                type="text"
                className="w-full focus-within:outline-none border-2 px-2 bg-transparent border-[#232323] rounded-md"
              />
            </label>

            <label>
              Описание:
              <input
                name="description"
                type="text"
                className="w-full focus-within:outline-none border-2 px-2 bg-transparent border-[#232323] rounded-md"
              />
            </label>

            <label>
              Цена:
              <input
                name="price"
                type="text"
                className="w-full focus-within:outline-none border-2 px-2 bg-transparent border-[#232323] rounded-md"
              />
            </label>

            <Button
              type="submit"
              className="mt-[25px]"
              width="w-full"
              height="h-[35px]"
              text="Добавить предмет"
            />
          </form>
        </div>
      </div>

      {/* Страница */}
      <Header />
      <TeaList callback={setModalActive} data={items} />
      <BannerCatalog />
      <About />
      <Advantage />
      <TeaCard />
      <Footer />
    </>
  );
};
