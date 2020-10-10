import Nav from "./nav";

function Layout({ children }) {
  return (
    <div>
      <Nav/>
      <main>
        <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
