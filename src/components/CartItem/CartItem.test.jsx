/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import CartItem from "./index";

function setup(ui) {
  return {
    user: userEvent.setup(),
    ...render(ui),
  };
}

const item = {
  id: "23457",
  name: "test",
  brand: "brand",
  image: "src",
  price: 198,
};

const onDelete = jest.fn(),
  onIncrease = jest.fn(),
  onDecrease = jest.fn();

describe("cart item", () => {
  it("every event function have been call with id of item", async () => {
    const { user } = setup(
      <CartItem
        item={item}
        count={2}
        onDelete={onDelete}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    );

    await user.click(screen.getByTestId("delete"));
    await user.click(screen.getByTestId("decrease"));
    await user.click(screen.getByTestId("increase"));

    expect(onDelete).toHaveBeenCalledWith(item.id);
    expect(onDecrease).toHaveBeenCalledWith(item.id);
    expect(onIncrease).toHaveBeenCalledWith(item.id);
  });
});
