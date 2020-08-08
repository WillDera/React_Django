from rest_framework import viewsets

from articles.models import Article
from .serializers import Article_serializer


class ArticleViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing user instances.
    """
    serializer_class = Article_serializer
    queryset = Article.objects.all()

# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView
# class ArticleListView(ListAPIView):
#     queryset = Article.objects.all()
#     serializer_class = Article_serializer


# class ArticleDetialView(RetrieveAPIView):
#     queryset = Article.objects.all()
#     serializer_class = Article_serializer


# class ArticleCreateView(CreateAPIView):
#     queryset = Article.objects.all()
#     serializer_class = Article_serializer
