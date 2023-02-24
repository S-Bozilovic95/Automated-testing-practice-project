import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
  test("renders posts if request succeeds", async () => {
    // ovo je mock funkcija i proverava da li je
    // request uspeo, jer test pri proveri koristi pravi api call
    // bi se to izbeglo koristi se ova "mock" funkcija koja simulira poziv
    // i vraca rezultat u obliku json objekta sa propertijima
    // ove funkcije se koriste i za localstorage i slicno
    // poziv se slimulira da bi se smanjio saobracaj i eventualne
    // nezeljene izmene
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: "p1", title: "first post" }],
    });
    render(<Async />);

    // find funkcije vracaju promis, i expect ce vrsiti proveru vise puta
    // prvi parametar (exact) preskacem jer nije potreban
    // drugi param je timeout koji ceka odredjen broj sekundi pre expecta
    // ovde nije potreban jer je po defaultu 1 sec sto je dovoljno za fetch
    const listItems = await screen.findAllByRole("listitem");
    expect(listItems).not.toHaveLength(0);
  });
});
