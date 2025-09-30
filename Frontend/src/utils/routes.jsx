import AgendaUploadForm from "../pages/AgendaUploadForm";
import EventUploadForm from "../pages/EventUploadForm";
import ProshowUploadForm from "../pages/ProshowUploadForm";

const routes = [
  { path: "/qwerty/agenda", element: <AgendaUploadForm /> },
  { path: "/qwerty/proshow", element: <ProshowUploadForm /> },
  { path: "/qwerty/event", element: <EventUploadForm /> },
];

export default routes;
