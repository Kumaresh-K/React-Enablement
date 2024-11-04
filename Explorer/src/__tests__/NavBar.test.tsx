import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import NavBar from "../components/NavBar/NavBar";
import { NAVIGATION_DATA } from "../constants";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import HomePage from "../pages/HomePage/HomePage";
import PageDown from "../components/PageDown/PageDown";

const renderWithRouter = (component: React.ReactElement) => {
  return render(<MemoryRouter>{component}</MemoryRouter>);
};

const getRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="/hotels" element={<PageDown />} />
      </Route>
    </Routes>
  );
};

describe("NavBar Component", () => {
  it("renders all navigation menu items", () => {
    renderWithRouter(<NavBar />);
    NAVIGATION_DATA.forEach((menuItem) => {
      expect(screen.getByText(menuItem.menuName)).toBeInTheDocument();
    });
  });

  it("renders the correct link paths for each menu item", () => {
    renderWithRouter(<NavBar />);
    NAVIGATION_DATA.forEach((menuItem) => {
      const linkElement = screen.getByText(menuItem.menuName);
      expect(linkElement).toHaveAttribute("href", menuItem.menuNavigationPath);
    });
  });

  it("navigates properly between pages", async () => {
    renderWithRouter(getRoutes());
    const navgationLink = await screen.findByText("Hotels");
    fireEvent.click(navgationLink);
    expect(await screen.findByText(/Page Unavailable/i)).toBeInTheDocument();
  });

  it("navigated page does have the active link", async () => {
    renderWithRouter(getRoutes());
    const navgationLink = await screen.findByText("Hotels");
    fireEvent.click(navgationLink);
    expect(await screen.findByText("Hotels")).toHaveClass("activeLink");
  });
});
