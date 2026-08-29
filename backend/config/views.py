from django.http import JsonResponse


def health_check(request):
    """A simple health check endpoint to verify the backend is running."""
    return JsonResponse({"status": "ok", "message": "House of Astrology API is running!"})