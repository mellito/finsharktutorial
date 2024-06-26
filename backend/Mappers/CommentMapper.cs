using backend.Dtos.Comment;
using backend.Models;

namespace backend.Mappers
{
    public static class CommentMapper
    {
        public static CommentDto ToCommentDto(this Comment commentModel)
        {
            return new CommentDto
            {
                Id = commentModel.Id,
                Title = commentModel.Title,
                Content = commentModel.Content,
                CreateOn = commentModel.CreateOn,
                StockId = commentModel.StockId,
                CreatedBy = commentModel.AppUser.UserName
            };
        }
        public static Comment ToCommentFromCreate(this CreateCommentRequestDto commentDto, int stockId, string userId)
        {
            return new Comment
            {
                Title = commentDto.Title,
                Content = commentDto.Content,
                CreateOn = DateTime.Now,
                StockId = stockId,
                AppUserId = userId

            };
        }
    }
}