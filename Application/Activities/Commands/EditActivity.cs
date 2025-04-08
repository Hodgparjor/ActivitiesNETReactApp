using System;
using Domain;
using MediatR;
using Persistance;

namespace Application.Activities.Commands;

public class EditActivity
{
    public class Command : IRequest {
        public required Activity Activity { get; set; }
    }

    public class Handler(AppDbContext context) : IRequestHandler<Command>
    {
        public async Task Handle(Command request, CancellationToken cancellationToken)
        {
            var activity = await context.Activities
                .FindAsync([request.Activity.Id], cancellationToken)
                    ?? throw new Exception($"Cannot find {request.Activity.Id} activity");

            activity.Title = request.Activity.Title; //etc etc - time consuming way of doing stuff, I'll use automapper

            await context.SaveChangesAsync(cancellationToken);
        }
    }
}
