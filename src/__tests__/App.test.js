import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import this line for toBeInTheDocument matcher
import App from '../App';

test("displays a top-level heading with the text `Hi, I'm _______`", () => {
  // Arrange
  render(<App />);
  // Act
  const topLevelHeading = screen.getByRole("heading", {
    name: /hi, i'm/i,
    exact: false,
    level: 1,
  });
  // Assert
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text", () => {
  // Arrange
  render(<App />);
  // Act
  const image = screen.getByAltText(/your alt text/i);
  // Assert
  expect(image).toBeInTheDocument();
  expect(image).toHaveAttribute("src", "your_image_src.jpg");
});

test("displays a second-level heading with the text 'About Me'", () => {
  // Arrange
  render(<App />);
  // Act
  const secondLevelHeading = screen.getByRole("heading", {
    name: /about me/i,
    exact: false,
    level: 2,
  });
  // Assert
  expect(secondLevelHeading).toBeInTheDocument();
});

test("displays a biography paragraph", () => {
  // Arrange
  render(<App />);
  // Act
  const bioParagraph = screen.getByText(/your biography goes here/i);
  // Assert
  expect(bioParagraph).toBeInTheDocument();
});

test("displays a link to GitHub", () => {
  // Arrange
  render(<App />);
  // Act
  const githubLink = screen.getByRole("link", { name: /github/i });
  // Assert
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "link_to_your_github_profile");
});

test("displays a link to LinkedIn", () => {
  // Arrange
  render(<App />);
  // Act
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  // Assert
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "link_to_your_linkedin_profile");
});
