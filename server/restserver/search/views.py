from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
import time

def deliver_page(request):
	return render(request, 'search/index.html', {})

@api_view(['GET'])
def dummy_fetch_search(request):
	time.sleep(2)
	dummy_response = {"response" : {
			"api_version" : "v1",
			"results" : [
				{
					"name" : "Ryan Smith",
					"location" : "Philadelphia, PA",
					"occupation" : "SuperDev"
				}
			]
		}
	}
	return Response(dummy_response)