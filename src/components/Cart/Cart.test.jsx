/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cart from "./index";
import { BrowserRouter } from "react-router-dom";

const items = {
  16925: {
    item: { name: "test", brand: "brand", price: 2438, image: "", id: "16925" },
    count: 1,
  },
  17437: {
    item: { name: "test", brand: "brand", price: 2963, image: "", id: "17437" },
    count: 3,
  },
  33404: {
    item: { name: "test", brand: "brand", price: 3705, image: "", id: "33404" },
    count: 2,
  },
  42989: {
    item: { name: "test", brand: "brand", price: 840, image: "", id: "42989" },
    count: 1,
  },
  61503: {
    item: { name: "test", brand: "brand", price: 4865, image: "", id: "61503" },
    count: 5,
  },
};

const isOpen = true;

const onClose = jest.fn(),
  onDeleteItem = jest.fn(),
  onIncreaseItem = jest.fn(),
  onDecreaseItem = jest.fn();

function renderWhitBrowserWrapper(ui) {
  return { ...render(ui, { wrapper: BrowserRouter }) };
}

jest.mock(
  "@components/CartItem",
  () =>
    ({ item, count, onDelete, onIncrease, onDecrease }) => {
      return (
        <div data-testid="cartItem">
          <button data-testid="removeItem" onClick={() => onDelete(item.id)}>
            remove
          </button>
          <button
            data-testid="increaseCount"
            onClick={() => onIncrease(item.id)}
          >
            increase
          </button>
          <button
            data-testid="decreaseCount"
            onClick={() => onDecrease(item.id)}
          >
            decrease
          </button>
          <span data-testid="item">{JSON.stringify(item)}</span>
          <span data-testid="count">{JSON.stringify(count)}</span>
        </div>
      );
    }
);

describe("Cart component", () => {
  it("render cart items", () => {
    renderWhitBrowserWrapper(
      <Cart
        items={items}
        isOpen={isOpen}
        onClose={onClose}
        onDeleteItem={onDeleteItem}
        onIncreaseItem={onIncreaseItem}
        onDecreaseItem={onDecreaseItem}
      />
    );

    expect(screen.queryAllByTestId("cartItem").length).toBe(5);
  });

  it("render EmptyCart component if cart has 0 items", () => {
    renderWhitBrowserWrapper(
      <Cart
        items={{}}
        isOpen={isOpen}
        onClose={onClose}
        onDeleteItem={onDeleteItem}
        onIncreaseItem={onIncreaseItem}
        onDecreaseItem={onDecreaseItem}
      />
    );

    expect(screen.queryByAltText("empty box")).toBeInTheDocument();
  });

  it("checkout button is disabled if cart has 0 items", () => {
    renderWhitBrowserWrapper(
      <Cart
        items={{}}
        isOpen={isOpen}
        onClose={onClose}
        onDeleteItem={onDeleteItem}
        onIncreaseItem={onIncreaseItem}
        onDecreaseItem={onDecreaseItem}
      />
    );

    expect(screen.queryByRole("button")).toBeDisabled();
  });
});
