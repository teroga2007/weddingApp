import PageWrapper from "../components/PageWrapper";

export default function RSVP() {
  return (
    <PageWrapper title="Confirma tu asistencia" titleBack="RSVP">
      <div className="relative w-full pb-[130%] sm:pb-[90%] md:pb-[75%] lg:pb-[65%] rounded-lg overflow-hidden shadow-md">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScGODebnkra4m6HZfXgYTuG2XU4JESlJa7rnpwfHVyn-jsjtg/viewform?embedded=true"
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen
          title="RSVP Form"
        >
          Loading…
        </iframe>
      </div>
    </PageWrapper>
  );
}
