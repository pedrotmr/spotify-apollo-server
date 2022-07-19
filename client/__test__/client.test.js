import { MockedProvider } from "@apollo/react-testing";
import Home from "../pages/index";
import { render, screen } from "@testing-library/react";
import { successResponse, errorReponse } from "./mockResponse.js";

describe("Render home page successfully", () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={successResponse}>
        <Home />
      </MockedProvider>
    );
  });

  it("should displays a loading message when fetching", async () => {
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should displays the 10 playlists", async () => {
    const playlist = await screen.findAllByRole("playlists");
    expect(playlist).toHaveLength(10);
  });
});

describe("Error fecthing data", () => {
  beforeEach(() => {
    render(
      <MockedProvider mocks={errorReponse}>
        <Home />
      </MockedProvider>
    );
  });

  it("should displays a loading message when fetching", async () => {
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("should display error message", async () => {
    const error = await screen.findByText("Error loading playlists...");
    expect(error).toBeInTheDocument();
  });
});
