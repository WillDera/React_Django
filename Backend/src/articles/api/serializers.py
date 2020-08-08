from rest_framework import serializers

from articles.models import Article


class Article_serializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'description', 'content')
