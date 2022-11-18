import React from "react";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white display-3">
              Türkiye COVID-19 Arama Motoru
            </h2>
            <input
              type="text"
              placeholder="GG/AA/YY"
              className="form-control"
            />
            <table class="table text-white ">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Test Sayısı</th>
                  <th scope="col">Hasta Sayısı</th>
                  <th scope="col">Vefat Sayısı</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>13600</td>
                  <td>2500</td>
                  <td>20</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
