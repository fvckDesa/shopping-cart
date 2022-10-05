/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ShopList from "./index";

const shopItems = [
  { id: "11426", name: "szp72", image: "mmtjzl", brand: "2zfn9", price: 575 },
  { id: "62482", name: "9ucdf", image: "f5khw", brand: "2w4yz", price: 2776 },
  { id: "99614", name: "nvi2h", image: "bk497", brand: "tpa8w", price: 1311 },
  { id: "18790", name: "t9pya", image: "yt97n", brand: "xtenp", price: 1712 },
  { id: "93960", name: "3lkj5", image: "lpd25", brand: "5si0c", price: 2440 },
];

const url = "https://testurl.com";

let useAxiosMock;

jest.mock("@hooks/useAxios", () => {
  const mock = jest.fn().mockReturnValue({
    data: shopItems,
    isLoading: false,
  });
  useAxiosMock = mock;
  return mock;
});

jest.mock("@components/ShopItem", () => ({ item }) => {
  return <div data-testid="shopItem">{JSON.stringify(item)}</div>;
});

jest.mock("@src/utils", () => {
  const originalModule = jest.requireActual("@src/utils");
  return {
    __esModule: true,
    ...originalModule,
    parseShopData: (data) => data,
  };
});

describe("ShopList Component", () => {
  it("render shop items", () => {
    render(<ShopList url={url} />);

    expect(screen.getAllByTestId("shopItem").length).toBe(5);
  });

  it("render loader when fetching data", () => {
    useAxiosMock.mockReturnValueOnce({ isLoading: true });

    render(<ShopList url={url} />);

    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });
});
