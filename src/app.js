const app = document.querySelector("#app");

const icons = {
  sun: `<svg viewBox="0 0 24 24"><path d="M12 4V2m0 20v-2m8-8h2M2 12h2m13.7-5.7 1.4-1.4M4.9 19.1l1.4-1.4m0-11.4L4.9 4.9m14.2 14.2-1.4-1.4"/><circle cx="12" cy="12" r="4"/></svg>`,
  cloud: `<svg viewBox="0 0 24 24"><path d="M17.5 18H8a5 5 0 1 1 .9-9.9 6.2 6.2 0 0 1 11.8 2.7A3.7 3.7 0 0 1 17.5 18Z"/></svg>`,
  rain: `<svg viewBox="0 0 24 24"><path d="M17.5 15H8a5 5 0 1 1 .9-9.9 6.2 6.2 0 0 1 11.8 2.7A3.7 3.7 0 0 1 17.5 15Z"/><path d="M8 19v1m4-3v2m4-2v2"/></svg>`,
  moon: `<svg viewBox="0 0 24 24"><path d="M20.2 14.7A8.4 8.4 0 0 1 9.3 3.8 8.5 8.5 0 1 0 20.2 14.7Z"/></svg>`,
  wind: `<svg viewBox="0 0 24 24"><path d="M3 8h11a3 3 0 1 0-3-3"/><path d="M3 13h16a3 3 0 1 1-3 3"/><path d="M3 18h7"/></svg>`,
  humidity: `<svg viewBox="0 0 24 24"><path d="M12 3s6 6.2 6 11a6 6 0 0 1-12 0c0-4.8 6-11 6-11Z"/></svg>`,
  search: `<svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></svg>`,
  plus: `<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14"/></svg>`,
  trash: `<svg viewBox="0 0 24 24"><path d="M3 6h18M8 6V4h8v2m-10 0 1 15h10l1-15"/></svg>`,
  settings: `<svg viewBox="0 0 24 24"><path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"/><path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2 3.4-.2-.1a1.7 1.7 0 0 0-2 .1 8 8 0 0 1-1.6.9 1.7 1.7 0 0 0-1.1 1.5V23H11v-.2a1.7 1.7 0 0 0-1.1-1.5 8 8 0 0 1-1.6-.9 1.7 1.7 0 0 0-2-.1l-.2.1-2-3.4.1-.1a1.7 1.7 0 0 0 .3-1.9 8 8 0 0 1-.2-1.8A1.7 1.7 0 0 0 3 11.5H2v-3h1a1.7 1.7 0 0 0 1.3-1.6 8 8 0 0 1 .2-1.8 1.7 1.7 0 0 0-.3-1.9L4.1 3l2-3.4.2.1a1.7 1.7 0 0 0 2-.1 8 8 0 0 1 1.6-.9A1.7 1.7 0 0 0 11 .2V0h2v.2a1.7 1.7 0 0 0 1.1 1.5 8 8 0 0 1 1.6.9 1.7 1.7 0 0 0 2 .1l.2-.1 2 3.4-.1.1a1.7 1.7 0 0 0-.3 1.9 8 8 0 0 1 .2 1.8 1.7 1.7 0 0 0 1.3 1.6h1v3h-1a1.7 1.7 0 0 0-1.3 1.6 8 8 0 0 1-.3 1Z"/></svg>`,
  location: `<svg viewBox="0 0 24 24"><path d="M12 22s7-6.1 7-13A7 7 0 1 0 5 9c0 6.9 7 13 7 13Z"/><circle cx="12" cy="9" r="2.5"/></svg>`,
  apple: `<svg viewBox="0 0 24 24"><path d="M16 13c0-2 1.6-3 1.7-3.1-1-.1-2.1-.6-2.8-1.4-1.2-1.4-3-1-4-.3-.5.3-1 .3-1.5.1-1.3-.5-2.7.1-3.5 1.2-1.6 2.3-.4 6.8 1.1 9.1.8 1.1 1.7 2.4 2.9 2.3 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7c1.2 0 2-1.1 2.7-2.2.9-1.3 1.3-2.6 1.3-2.7 0 0-2.6-1-2.6-3Z"/><path d="M14.2 5.4c.6-.8 1.1-1.8 1-2.8-1 .1-2 .6-2.7 1.3-.6.7-1.1 1.7-1 2.7 1 .1 2-.4 2.7-1.2Z"/></svg>`,
  google: `<svg viewBox="0 0 24 24"><path d="M21.5 12.2c0-.7-.1-1.3-.2-1.9H12v3.6h5.3a4.5 4.5 0 0 1-2 2.9v2.4h3.1c1.8-1.7 3.1-4.1 3.1-7Z"/><path d="M12 22c2.7 0 4.9-.9 6.5-2.4l-3.1-2.4c-.9.6-2 .9-3.4.9a6 6 0 0 1-5.6-4.2H3.2v2.5A9.9 9.9 0 0 0 12 22Z"/><path d="M6.4 13.8a6 6 0 0 1 0-3.6V7.7H3.2a10 10 0 0 0 0 8.9l3.2-2.8Z"/><path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8A9.5 9.5 0 0 0 12 2a9.9 9.9 0 0 0-8.8 5.7l3.2 2.5A6 6 0 0 1 12 5.9Z"/></svg>`
};

const cityBank = {
  "san francisco": { city: "San Francisco", region: "California, US", temp: 72, high: 78, low: 54, condition: "Partly Cloudy", weather: "sunny", humidity: 64, wind: 12, pressure: 1016, visibility: 10 },
  "new york": { city: "New York", region: "New York, US", temp: 64, high: 69, low: 51, condition: "Light Rain", weather: "rainy", humidity: 78, wind: 16, pressure: 1009, visibility: 7 },
  london: { city: "London", region: "England, UK", temp: 58, high: 62, low: 49, condition: "Cloudy", weather: "cloudy", humidity: 69, wind: 9, pressure: 1012, visibility: 8 },
  tokyo: { city: "Tokyo", region: "Japan", temp: 68, high: 73, low: 59, condition: "Clear Night", weather: "night", humidity: 57, wind: 7, pressure: 1019, visibility: 11 },
  "san diego": { city: "San Diego", region: "California, US", temp: 78, high: 83, low: 62, condition: "Sunny", weather: "sunny", humidity: 52, wind: 8, pressure: 1018, visibility: 12 },
  seattle: { city: "Seattle", region: "Washington, US", temp: 55, high: 60, low: 47, condition: "Rain", weather: "rainy", humidity: 83, wind: 13, pressure: 1007, visibility: 6 }
};

let state = {
  screen: "welcome",
  authMode: "signin",
  selected: "san francisco",
  saved: ["san francisco", "new york", "london"],
  query: "",
  units: "F",
  windUnit: "mph",
  pressureUnit: "hPa",
  themePref: "auto",
  notifications: true,
  quietHours: true,
  defaultLocation: "san francisco",
  user: { name: "Alex Johnson", email: "alex.johnson@example.com" },
  errors: {}
};

function icon(name) {
  return `<span class="icon">${icons[name] || icons.cloud}</span>`;
}

function getTemp(value) {
  return state.units === "C" ? Math.round((value - 32) * 5 / 9) : value;
}

function temp(value) {
  return `${getTemp(value)}&deg;`;
}

function currentCity() {
  return cityBank[state.selected] || cityBank["san francisco"];
}

function themeFor(city) {
  if (state.themePref === "manual") return "manual";
  return city.weather;
}

function setState(next) {
  state = { ...state, ...next };
  render();
}

function validateAuth(mode) {
  const form = Object.fromEntries(new FormData(document.querySelector("form")).entries());
  const errors = {};
  if (mode === "signup" && !form.name?.trim()) errors.name = "Name is required.";
  if (!/^\S+@\S+\.\S+$/.test(form.email || "")) errors.email = "Enter a valid email address.";
  if ((form.password || "").length < 8) errors.password = "Password must be at least 8 characters.";
  if (mode === "signin" && form.email && form.password && form.password.toLowerCase() === "wrong") {
    errors.password = "Incorrect password. Try a stronger demo password.";
  }
  if (mode === "signup" && form.password !== form.confirm) errors.confirm = "Passwords do not match.";
  state.errors = errors;
  if (Object.keys(errors).length === 0) {
    state.screen = "dashboard";
    state.user = { name: form.name || "Alex Johnson", email: form.email };
  }
  render();
}

function authInput(id, label, type, placeholder) {
  const error = state.errors[id];
  return `
    <label class="field ${error ? "has-error" : ""}">
      <span>${label}</span>
      <input name="${id}" type="${type}" placeholder="${placeholder}" ${id === "email" ? "autocomplete=\"email\"" : ""} />
      ${error ? `<small>${error}</small>` : ""}
    </label>
  `;
}

function welcomeScreen() {
  return `
    <main class="phone auth-shell weather-sunny">
      <section class="welcome stack">
        <div class="brand-mark">${icon("cloud")}</div>
        <h1>Weather,<br />Perfected.</h1>
        <div class="feature-list">
          <article>
            ${icon("location")}
            <div><b>Hyper-Local Forecasts</b><span>Pinpoint accuracy for your exact location, updated minute by minute.</span></div>
          </article>
          <article>
            ${icon("humidity")}
            <div><b>Smart Alerts</b><span>Stay ahead of severe conditions with intelligent push notifications.</span></div>
          </article>
        </div>
        <div class="bottom-actions">
          <button class="primary light" data-action="signup">Create Account</button>
          <button class="ghost" data-action="signin">Sign In</button>
        </div>
      </section>
    </main>
  `;
}

function authScreen(mode) {
  const isSignup = mode === "signup";
  return `
    <main class="phone auth-shell weather-sunny">
      <button class="round back" data-action="welcome" aria-label="Back">‹</button>
      <section class="auth-card stack fade-in">
        <div>
          <h1>${isSignup ? "Create Account" : "Welcome back"}</h1>
          <p>${isSignup ? "Join us to get real-time weather updates and save your favorite locations." : "Sign in to access your personalized weather dashboard and saved locations."}</p>
        </div>
        <form novalidate data-auth="${mode}">
          ${isSignup ? authInput("name", "Full Name", "text", "John Doe") : ""}
          ${authInput("email", "Email Address", "email", "Enter your email")}
          ${authInput("password", "Password", "password", isSignup ? "Create a password" : "Enter your password")}
          ${isSignup ? authInput("confirm", "Confirm Password", "password", "Confirm your password") : ""}
          ${isSignup ? `<div class="checks"><span>At least 8 characters long</span><span>Contains a number or symbol</span><span>Contains an uppercase letter</span></div>` : `<a class="forgot" href="#">Forgot password?</a>`}
          <button class="primary" type="submit">${isSignup ? "Create Account" : "Sign In"}</button>
        </form>
        <div class="divider"><span>Or continue with</span></div>
        <div class="socials">
          <button>${icon("apple")}Apple</button>
          <button>${icon("google")}Google</button>
        </div>
        <button class="text-link" data-action="${isSignup ? "signin" : "signup"}">${isSignup ? "Already have an account? Sign in" : "New here? Create an account"}</button>
      </section>
    </main>
  `;
}

function heroBackground(theme) {
  const stars = Array.from({ length: 18 }, (_, i) => `<i style="--x:${(i * 37) % 96}%;--y:${(i * 23) % 78}%;--d:${(i % 5) * .2}s"></i>`).join("");
  return `<div class="weather-bg ${theme}"><div class="orb"></div><div class="rain-lines"></div><div class="stars">${stars}</div></div>`;
}

function dashboard() {
  const city = currentCity();
  const theme = themeFor(city);
  const savedTabs = state.saved.map(key => {
    const item = cityBank[key];
    return `<button class="${key === state.selected ? "active" : ""}" data-select="${key}">${item.city}</button>`;
  }).join("");
  return `
    <main class="app-frame theme-${theme}">
      <nav class="topbar">
        <div>
          <strong>${city.city}</strong>
          <span>Current Location</span>
        </div>
        <button class="icon-btn" data-screen="settings" aria-label="Settings">${icon("settings")}</button>
      </nav>
      <section class="search-row">
        <label class="search-box">${icon("search")}<input id="citySearch" value="${state.query}" placeholder="Search city or ZIP..." /></label>
        <button class="icon-btn accent" data-action="add">${icon("plus")}</button>
      </section>
      <section class="tabs" aria-label="Saved locations">${savedTabs}</section>
      <section class="hero">
        ${heroBackground(theme)}
        <div class="hero-content">
          <div class="time-pill">${theme === "night" ? "Night" : new Date().getHours() < 12 ? "Morning" : "Afternoon"}</div>
          <h1>${temp(city.temp)}</h1>
          <p>${city.condition}</p>
          <span>H: ${temp(city.high)} · L: ${temp(city.low)}</span>
        </div>
      </section>
      <section class="section-title">
        <h2>Current Details</h2>
        <button data-action="save">Save Location</button>
      </section>
      <section class="detail-grid">
        ${detailCard("humidity", "Humidity", `${city.humidity}%`, "Dew point: 58&deg;")}
        ${detailCard("wind", "Wind", `${state.windUnit === "kmh" ? Math.round(city.wind * 1.609) : city.wind} ${state.windUnit}`, "NW direction")}
        ${detailCard("sun", "Feels Like", temp(city.temp + 2), "Comfortable")}
        ${detailCard("cloud", "Condition", city.condition, "Updated now")}
      </section>
      <section class="section-title">
        <h2>7-Day Forecast</h2>
        <button>More</button>
      </section>
      <section class="forecast" tabindex="0">${forecast(city)}</section>
      <section class="saved-panel">
        <div class="section-title"><h2>Saved Locations</h2><button data-screen="locations">Manage</button></div>
        ${state.saved.map(key => savedRow(key)).join("")}
      </section>
    </main>
  `;
}

function detailCard(iconName, label, value, hint) {
  return `<article class="detail-card">${icon(iconName)}<span>${label}</span><strong>${value}</strong><small>${hint}</small></article>`;
}

function forecast(city) {
  const days = ["Today", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const map = { sunny: "sun", cloudy: "cloud", rainy: "rain", night: "moon", manual: "sun" };
  return days.map((day, i) => `
    <article class="forecast-card">
      <span>${day}</span>
      ${icon(map[city.weather])}
      <strong>${temp(city.high - i)} / ${temp(city.low + i % 3)}</strong>
    </article>
  `).join("");
}

function savedRow(key) {
  const city = cityBank[key];
  const active = key === state.selected ? "selected" : "";
  return `
    <article class="saved-row ${active}">
      <button data-select="${key}">
        <span><b>${city.city}</b><small>${city.region}</small></span>
        <span>${icon(city.weather === "rainy" ? "rain" : city.weather === "night" ? "moon" : city.weather === "sunny" ? "sun" : "cloud")}<b>${temp(city.temp)}</b></span>
      </button>
      <button class="delete" data-delete="${key}" aria-label="Delete ${city.city}">${icon("trash")}</button>
    </article>
  `;
}

function locationsScreen() {
  return `
    <main class="app-frame settings-frame">
      <nav class="topbar">
        <button class="plain" data-screen="dashboard">Done</button>
        <strong>Edit Locations</strong>
        <button class="plain" data-action="selectAll">Select All</button>
      </nav>
      <section class="search-row">
        <label class="search-box">${icon("search")}<input id="citySearch" value="${state.query}" placeholder="Search for a city or airport..." /></label>
        <button class="icon-btn accent" data-action="add">${icon("plus")}</button>
      </section>
      <div class="micro-label">${state.saved.length} saved</div>
      <section class="locations-list">${state.saved.map(key => savedRow(key)).join("")}</section>
      <button class="danger" data-action="clearSaved">${icon("trash")}Delete Selected</button>
    </main>
  `;
}

function settingsScreen() {
  const city = cityBank[state.defaultLocation];
  return `
    <main class="app-frame settings-frame">
      <nav class="topbar">
        <button class="round" data-screen="dashboard" aria-label="Back">‹</button>
        <strong>Settings</strong>
        <span></span>
      </nav>
      <section class="profile">
        <div class="avatar">${icon("cloud")}</div>
        <h1>${state.user.name}</h1>
        <p>${state.user.email}</p>
        <button>Edit Profile</button>
      </section>
      <section class="settings-section">
        <h2>Units</h2>
        ${segmented("Temperature", "units", ["C", "F"], state.units)}
        ${segmented("Wind Speed", "windUnit", ["kmh", "mph"], state.windUnit)}
        ${segmented("Pressure", "pressureUnit", ["hPa", "inHg"], state.pressureUnit)}
      </section>
      <section class="settings-section">
        <h2>Appearance</h2>
        ${segmented("Theme", "themePref", ["auto", "manual"], state.themePref)}
      </section>
      <section class="settings-section">
        <h2>Preferences</h2>
        <label class="setting-row">
          <span>${icon("location")}Default Location <small>${city.city}</small></span>
          <select id="defaultLocation">${state.saved.map(key => `<option value="${key}" ${key === state.defaultLocation ? "selected" : ""}>${cityBank[key].city}</option>`).join("")}</select>
        </label>
        ${toggle("Notifications", "notifications", state.notifications)}
        ${toggle("Quiet Hours", "quietHours", state.quietHours)}
      </section>
      <button class="danger outline" data-action="logout">Logout</button>
    </main>
  `;
}

function segmented(label, key, options, current) {
  return `
    <div class="setting-row">
      <span>${label}</span>
      <div class="segmented">${options.map(option => `<button class="${current === option ? "active" : ""}" data-set="${key}:${option}">${option}</button>`).join("")}</div>
    </div>
  `;
}

function toggle(label, key, checked) {
  return `
    <label class="setting-row">
      <span>${label}</span>
      <input class="toggle" type="checkbox" data-toggle="${key}" ${checked ? "checked" : ""} />
    </label>
  `;
}

function render() {
  const screens = {
    welcome: welcomeScreen,
    signin: () => authScreen("signin"),
    signup: () => authScreen("signup"),
    dashboard,
    locations: locationsScreen,
    settings: settingsScreen
  };
  app.innerHTML = screens[state.screen]();
  requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function addCity() {
  const input = document.querySelector("#citySearch");
  const query = (input?.value || state.query).trim().toLowerCase();
  const match = cityBank[query] || Object.values(cityBank).find(city => city.city.toLowerCase().includes(query));
  if (!match) {
    state.query = "";
    state.errors = { search: "Try San Diego, Seattle, Tokyo, London, or New York." };
    render();
    setTimeout(() => alert("Try San Diego, Seattle, Tokyo, London, or New York."), 50);
    return;
  }
  const key = match.city.toLowerCase();
  state.saved = Array.from(new Set([...state.saved, key]));
  state.selected = key;
  state.query = "";
  render();
}

app.addEventListener("click", event => {
  const target = event.target.closest("button");
  if (!target) return;
  const action = target.dataset.action;
  const screen = target.dataset.screen;
  const select = target.dataset.select;
  const del = target.dataset.delete;
  const set = target.dataset.set;

  if (action === "signin") setState({ screen: "signin", errors: {} });
  if (action === "signup") setState({ screen: "signup", errors: {} });
  if (action === "welcome") setState({ screen: "welcome", errors: {} });
  if (action === "add") addCity();
  if (action === "save") setState({ saved: Array.from(new Set([...state.saved, state.selected])) });
  if (action === "clearSaved") setState({ saved: [state.selected] });
  if (action === "logout") setState({ screen: "welcome" });
  if (screen) setState({ screen });
  if (select) setState({ selected: select, screen: state.screen === "locations" ? "locations" : "dashboard" });
  if (del && state.saved.length > 1) {
    const saved = state.saved.filter(key => key !== del);
    setState({ saved, selected: state.selected === del ? saved[0] : state.selected });
  }
  if (set) {
    const [key, value] = set.split(":");
    setState({ [key]: value });
  }
});

app.addEventListener("submit", event => {
  event.preventDefault();
  validateAuth(event.target.dataset.auth);
});

app.addEventListener("input", event => {
  if (event.target.id === "citySearch") state.query = event.target.value;
  if (event.target.dataset.toggle) setState({ [event.target.dataset.toggle]: event.target.checked });
});

app.addEventListener("change", event => {
  if (event.target.id === "defaultLocation") setState({ defaultLocation: event.target.value, selected: event.target.value });
});

render();
